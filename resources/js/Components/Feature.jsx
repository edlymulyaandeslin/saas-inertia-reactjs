import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Feature({ feature, answer, children }) {
    const { auth } = usePage().props;

    const availableCredits = auth.user.available_credits;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {feature.name}
                </h2>
            }
        >
            <Head title="Feature 1" />

            <div className="py-12">
                <div className="mx-auto max-2-7xl sm:px-6 lg:px-8">
                    {answer !== null && (
                        <div className="px-5 py-3 mb-3 text-xl text-white rounded bg-emerald-600">
                            Result of calculation : {answer}
                        </div>
                    )}
                    <div className="relative overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        {availableCredits !== null &&
                            feature.required_credits > availableCredits && (
                                <div className="absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center gap-3 bg-white/70">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-14"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                        />
                                    </svg>
                                    <div>
                                        You don't have enough credits for this
                                        feature. Go{" "}
                                        <Link
                                            href={route("credit.index")}
                                            className="underline"
                                        >
                                            Buy More Credits
                                        </Link>
                                    </div>
                                </div>
                            )}
                        <div className="p-8 pb-4 text-gray-400 border-b">
                            <p>{feature.description}</p>
                            <p className="text-sm italic text-right">
                                Required {feature.required_credits} Credits
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
