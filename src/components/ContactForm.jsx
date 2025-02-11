"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";

export default function ContactForm() {
    const t = useTranslations("HomePage");
    const [formData, setFormData] = useState({email: "", username: "", object: "", message: ""});
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
            case "object":
                return value.length >= 5;
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
            setFormData({email: "", username: "", object: "", message: ""});
            setFormFieldValidity({email: false, username: false, message: false});
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 px-2 py-8 items-start justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                rounded-2xl shadow-lg w-full max-w-4xl border border-gray-200 dark:border-gray-800"
            >
                <h2 className="text-3xl font-bold text-center">{t("contact.formTitle")}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-center">{t("contact.description")}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                        <span className="text-gray-900 dark:text-gray-200 font-medium">{t("contact.email")}</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input input-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${
                                formFieldValidity.email ? "input-success" : "input-error"
                            }`}
                            placeholder={t("contact.emailPlaceholder")}
                            required
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-gray-900 dark:text-gray-200 font-medium">{t("contact.username")}</span>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`input input-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${
                                formFieldValidity.username ? "input-success" : "input-error"
                            }`}
                            placeholder={t("contact.usernamePlaceholder")}
                            required
                        />
                    </label>
                </div>

                <label className="flex flex-col gap-2">
                    <span className="text-gray-900 dark:text-gray-200 font-medium">{t("contact.object")}</span>
                    <input
                        type="text"
                        name="object"
                        value={formData.object}
                        onChange={handleChange}
                        className={`input input-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${
                            formFieldValidity.object ? "input-success" : "input-error"
                        }`}
                        placeholder={t("contact.objectPlaceholder")}
                        required
                    />
                </label>

                <label className="flex flex-col gap-2">
                    <span className="text-gray-900 dark:text-gray-200 font-medium">{t("contact.message")}</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`textarea textarea-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${
                            formFieldValidity.message ? "textarea-success" : "textarea-error"
                        }`}
                        placeholder={t("contact.messagePlaceholder")}
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={loading || !Object.values(formFieldValidity).every(Boolean)}
                >
                    {loading ? <span className="loading loading-spinner"></span> : t("contact.submit")}
                </button>

                {success && <p className="text-green-500 text-sm text-center">{t("contact.successMessage")}</p>}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </form>

            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 rounded-2xl shadow-lg
            w-full max-w-md border border-gray-200 dark:border-gray-800">
                <h2 className="text-3xl font-bold text-center">{t("contact.otherWays")}</h2>
                <div className="mt-6 space-y-4 text-left">
                    <div>
                        <a href="mailto:pro@robin-massonnat.fr"
                           className="text-blue-500 hover:underline text-lg font-medium">
                            pro@robin-massonnat.fr
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/robin-massonnat"
                            target="_blank"
                            className="text-blue-500 hover:underline text-lg font-medium"
                        >
                            linkedin.com/in/robin-massonnat
                        </a>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-lg font-medium">Discord: Farmeurimmo</div>
                </div>
            </div>
        </div>
    );
}

