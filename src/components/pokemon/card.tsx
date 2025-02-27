import { useTheme } from "@/context/theme-context";
import Link from "next/link";

export default function PokemonCard({ name, url }: { name: string; url: string }) {
    const {theme} = useTheme();
    const id = url.split("/")[url.split("/").length - 2];

    return (
        <Link href={`/details/pokemon/${encodeURIComponent(id)}`}>
            <div className={`p-4 border rounded-lg shadow-md hover:bg-yellow transition ${ theme== "light" ? "bg-white text-black" : "bg-gray-900 text-white border-color-white"}`}>
                <p className="capitalize font-bold">{name}</p>
            </div>
        </Link>
    );
}
