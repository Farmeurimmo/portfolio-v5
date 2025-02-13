"use client";

import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {CircleCheck, LinkedinIcon, MailIcon, XCircle} from "lucide-react";

export default function ContactForm({service}) {
    const t = useTranslations("HomePage");
    const [formData, setFormData] = useState({email: "", username: "", object: "", message: ""});
    const [formFieldValidity, setFormFieldValidity] = useState({email: false, username: false, message: false});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (service !== undefined && service.length >= 4) {
            setFormData((prev) => ({...prev, object: service}));
            setFormFieldValidity((prev) => ({...prev, object: validateField("object", service)}));
        }
    }, [service]);

    const validateField = (name, value) => {
        switch (name) {
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case "username":
                return value.length >= 3;
            case "object":
                return value.length >= 4;
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
        <div className="flex flex-col xl:grid xl:grid-cols-2 max-w-full gap-10 px-2 py-8 items-start justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg w-full border border-gray-200 dark:border-gray-800"
            >
                <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-4">{t("contact.formTitle")}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{t("contact.description")}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 relative">
                        <label htmlFor="email"
                               className="font-medium text-gray-900 dark:text-gray-200">{t("contact.email")}</label>
                        <input
                            id="email"
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
                        {formFieldValidity.email && <CircleCheck className="absolute right-2 top-0 text-green-500"/>}
                        {!formFieldValidity.email && <XCircle className="absolute right-2 top-0 text-red-500"/>}
                    </div>

                    <div className="flex flex-col gap-2 relative">
                        <label htmlFor="username"
                               className="font-medium text-gray-900 dark:text-gray-200">{t("contact.username")}</label>
                        <input
                            id="username"
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
                        {formFieldValidity.username && <CircleCheck className="absolute right-2 top-0 text-green-500"/>}
                        {!formFieldValidity.username && <XCircle className="absolute right-2 top-0 text-red-500"/>}
                    </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label htmlFor="object"
                           className="font-medium text-gray-900 dark:text-gray-200">{t("contact.object")}</label>
                    <input
                        id="object"
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
                    {formFieldValidity.object && <CircleCheck className="absolute right-2 top-0 text-green-500"/>}
                    {!formFieldValidity.object && <XCircle className="absolute right-2 top-0 text-red-500"/>}
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label htmlFor="message"
                           className="font-medium text-gray-900 dark:text-gray-200">{t("contact.message")}</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`textarea textarea-bordered bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${
                            formFieldValidity.message ? "textarea-success" : "textarea-error"
                        }`}
                        placeholder={t("contact.messagePlaceholder")}
                        rows={16}
                        required
                    />
                    {formFieldValidity.message && <CircleCheck className="absolute right-2 top-0 text-green-500"/>}
                    {!formFieldValidity.message && <XCircle className="absolute right-2 top-0 text-red-500"/>}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading || !Object.values(formFieldValidity).every(Boolean)}
                >
                    {loading ? <span className="loading loading-spinner"></span> : t("contact.submit")}
                </button>

                {success && <p className="text-green-500 text-sm text-center">{t("contact.successMessage")}</p>}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </form>

            <div
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 rounded-2xl shadow-lg w-full border border-gray-200 dark:border-gray-800 flex flex-grow flex-col">
                <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-4">{t("contact.otherWays")}</h2>
                <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-2">
                        <MailIcon className="h-6 w-6 text-blue-500"/>
                        <a href="mailto:pro@robin-massonnat.fr"
                           className="text-blue-500 hover:underline text-lg font-medium">
                            pro@robin-massonnat.fr
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <LinkedinIcon className="h-6 w-6 text-blue-500"/>
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

