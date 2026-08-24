'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Paginacao({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const currentPage = Number(searchParams.get('page') || 1);

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            <Link 
                href={createPageUrl(currentPage - 1)}
                className={`transition-colors ${currentPage <= 1 ? 'pointer-events-none text-gray-300' : 'text-black hover:text-gray-600'}`}
            >
                <ChevronLeft size={24} />
            </Link>

            <input
                key={currentPage}
                type="number"
                defaultValue={currentPage}
                min={1}
                max={totalPages}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        let novaPagina = parseInt(e.currentTarget.value);
                        
                        if (isNaN(novaPagina) || novaPagina < 1) novaPagina = 1;
                        if (novaPagina > totalPages) novaPagina = totalPages;
                        
                        router.push(createPageUrl(novaPagina));
                    }
                }}
                className="w-16 bg-transparent text-center font-anton text-xl text-black outline-none border-b-2 border-transparent focus:border-black transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <Link 
                href={createPageUrl(currentPage + 1)}
                className={`transition-colors ${currentPage >= totalPages ? 'pointer-events-none text-gray-300' : 'text-black hover:text-gray-600'}`}
            >
                <ChevronRight size={24} />
            </Link>
        </div>
    );
}