import { usePage } from "@inertiajs/react";
// import { CiCircleCheck } from "react-icons/ci";

export default function PackagesPricingCards({ packages, features }) {
    const { csrf_token } = usePage().props;
    return (
        <section className="bg-gray-900">
            <div className="px-4 py-8">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-4xl font-extrabold text-white">
                        The more credits you choose the bigger saving you will
                        make.
                    </h2>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {packages.map((pack) => (
                        <div
                            key={pack.id}
                            className="flex flex-col max-w-lg p-6 mx-auto text-center text-white bg-gray-800 border border-gray-600 rounded-lg shadow align-stretch lg:mx-0"
                        >
                            <h3 className="mb-4 text-2xl font-semibold">
                                {pack.name}
                            </h3>

                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    ${pack.price}
                                </span>
                                <span className="text-2xl dark:text-gray-400">
                                    /{pack.credits} credits
                                </span>
                            </div>

                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                {features.map((feature) => (
                                    <li
                                        key={feature.id}
                                        className="flex items-center space-x-3"
                                    >
                                        {/* <CiCircleCheck /> */}
                                        <span>{feature.name}</span>
                                    </li>
                                ))}
                            </ul>

                            <form
                                action={route("credit.buy", pack)}
                                method="post"
                                className="w-full"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf_token}
                                    autoComplete="off"
                                ></input>

                                <button className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 w-full">
                                    Get started
                                </button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
