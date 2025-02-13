import React from 'react';
import Link from 'next/link';
import BaseLayout from "@/app/BaseLayout";
import {routing} from "@/i18n/routing";

export default function Custom404() {
    return (
        <BaseLayout locale={routing.defaultLocale}>
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
                <Link href={'/'} className={'mt-4 text-blue-500 hover:underline'}>Go back to the homepage</Link>
            </div>
        </BaseLayout>
    );
}