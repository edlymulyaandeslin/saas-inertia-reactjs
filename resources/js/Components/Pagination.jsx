import { Link } from "@inertiajs/react";

export default function Pagination({ meta }) {
    return (
        <nav className="flex justify-between mx-4 my-4 mt-4 text-center">
            <div className="text-gray-400">
                Showing {meta.from || 0} to {meta.to || 0} of {meta.total}{" "}
                results
            </div>
            <div>
                {meta.links.map((link) => (
                    <Link
                        href={link.url || ""}
                        key={link.label}
                        className={
                            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
                            (link.active ? "bg-gray-950 " : " ") +
                            (!link.url
                                ? "!text-gray-500 cursor-not-allowed "
                                : "hover:bg-gray-950")
                        }
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                ))}
            </div>
        </nav>
    );
}
