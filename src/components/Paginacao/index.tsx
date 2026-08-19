'use client';

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Paginacao({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
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

            <span className="font-anton text-xl text-black">
                {currentPage}
            </span>

            <Link 
                href={createPageUrl(currentPage + 1)}
                className={`transition-colors ${currentPage >= totalPages ? 'pointer-events-none text-gray-300' : 'text-black hover:text-gray-600'}`}
            >
                <ChevronRight size={24} />
            </Link>
        </div>
    );
}