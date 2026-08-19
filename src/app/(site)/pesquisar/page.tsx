import { TituloPesquisar } from "../../../components/PesquisarPagina/TituloPesquisar";
import { CardsPesquisar } from "../../../components/PesquisarPagina/CardsPesquisar";
import { filtrarPesquisaProdutos } from "@/actions/pesquisar/actions";

export default async function PaginaPesquisa({
    searchParams,
}: {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>
}) {

    const params = await searchParams;
    const query = params?.query || '';
    const currentPage = Number(params?.page) || 1

  const {produtos, count, totalPages} = await filtrarPesquisaProdutos(query, currentPage)

  return (
    <main className="w-full bg-(--var-Creme) min-h-screen pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        
        <TituloPesquisar termo={query} quantidade={count} />
        
        <CardsPesquisar titulo={query} produtos={produtos} totalPages={totalPages} />
        
      </div>
    </main>
  );
}