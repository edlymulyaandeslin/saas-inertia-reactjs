import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PackagesPricingCards from "../../Components/PackagesPricingCards";

export default function Index({ auth, packages, features, success, error }) {
    const availableCredits = auth.user.available_credits;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Your Credits
                </h2>
            }
        >
            <Head title="Your Credits" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {success && (
                        <div className="p-3 mb-4 text-gray-100 rounded-lg bg-emerald-500">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div className="p-3 mb-4 text-gray-100 bg-red-500 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="relative overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex flex-col items-center gap-3 p-4">
                            <img
                                src="/img/coin1.png"
                                alt=""
                                className="w-[100px]"
                            />

                            <h3 className="text-2xl text-white">
                                You have {availableCredits} credits.
                            </h3>
                        </div>
                    </div>
                    <PackagesPricingCards
                        packages={packages.data}
                        features={features.data}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
