"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";

export default function ContactForm() {
    const t = useTranslations("HomePage");
    const [formData, setFormData] = useState({email: "", username: "", message: ""});
    const [formFieldValidity, setFormFieldValidity] = useState({email: false, username: false, message: false});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const validateField = (name, value) => {
        switch (name) {
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case "username":
                return value.length >= 3;
            case "message":
                return value.length >= 10;
            default:
                return false;
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setFormFieldValidity((prev) => ({...prev, [name]: validateField(name, value)}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Object.values(formFieldValidity).every(Boolean)) return;

        setLoading(true);
        setSuccess(false);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("An error occurred");

            setSuccess(true);
            setFormData({email: "", username: "", message: ""});
            setFormFieldValidity({email: false, username: false, message: false});
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}
              className="flex flex-col m-6 gap-6 p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white rounded-2xl shadow-xl w-full max-w-lg">
            <label className="flex flex-col gap-2">
                <span className="text-gray-900 dark:text-gray-200">{t('contact.email')}</span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input input-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${formFieldValidity.email ? "input-success" : "input-error"}`}
                    placeholder={t('contact.emailPlaceholder')}
                    required
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="text-gray-900 dark:text-gray-200">{t('contact.username')}</span>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`input input-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${formFieldValidity.username ? "input-success" : "input-error"}`}
                    placeholder={t('contact.usernamePlaceholder')}
                    required
                />
            </label>

            <label className="flex flex-col gap-2">
                <span className="text-gray-900 dark:text-gray-200">{t('contact.message')}</span>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`textarea textarea-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${formFieldValidity.message ? "textarea-success" : "textarea-error"}`}
                    placeholder={t('contact.messagePlaceholder')}
                    required
                />
            </label>

            <button type="submit" className="btn btn-primary"
                    disabled={loading || !Object.values(formFieldValidity).every(Boolean)}>
                {loading ? t('contact.sending') : t('contact.submit')}
            </button>

            {success && <p className="text-green-500 text-sm">{t('contact.successMessage')}</p>}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
    );
}

