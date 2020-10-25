import Head from 'next/head';
import React, { useEffect, useState } from 'react';

//-------------------------------------------------------------------------------------------------------------------------
// Função que obtem o json emitido pela api
const useFetch = url => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchHandler = async () => {
    const res = await fetch(url).then(res => res.json());
    setValue(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  return { value, loading };
};






//--------------------------------------------------------GruposDropdown--------------------------------------------------------

const GruposDropdown = () => {
  //Chamada da api grupos(conexão com o db)
  const { value: grupos } = useFetch('/api/grupos');

  //Função setState React
  const [selectedGrupo, setSelectedGrupo] = useState('');

  //Distinct do grupos
  const distinctGrupos: string[] = Array.from(new Set(grupos?.map(grupo => grupo['Grupo Empresarial'])));

  //console.log(distinctGrupos);

  //-----------Select/Options [[GRUPO]]------------------------
  const optionsGrupo = distinctGrupos.map(grupo =>{
    return (
      <option key={grupo} value={grupo}>
        {grupo}
      </option>
    );
  });

  //----------Select/Options [[CLIENTE]]------------------------
  // const optionsCliente = grupos
  // ?.filter(grupo => grupo.grupo === selectedGrupo)
  // .map(grupo => {
  //   return (
  //     <option key={grupo.os} value={grupo.os}>
  //       {grupo.cliente}
  //     </option>
  //   )
  // });

  //-------------Select/Options [[CNPJ]]------------------------
  // const optionsCnpj = grupos
  // ?.filter(grupo => grupo.grupo === selectedGrupo)
  // .map(grupo => {
  //   return (
  //     <option key={grupo.os} value={grupo.os}>
  //       {grupo.cnpj}
  //     </option>
  //   )
  // });

  //-----------Select/Options [[OS]]----------------------------
  // const optionsOS = grupos
  // ?.filter(grupo => grupo.grupo === selectedGrupo)
  // .map(grupo => {
  //   return (
  //     <option key={grupo.os} value={grupo.os}>
  //       {grupo.os}
  //     </option>
  //   )
  // });



  //--------------------------------------------RENDER SELECT------------------------------------------


  return (
  
  <>
    {/* ------------Render Grupos---------------------- */}
    <p>Grupos</p>
    <select value={selectedGrupo} onChange={event => {setSelectedGrupo(event.target.value);}} name="grupos">
      <option value="" disabled>
       - GRUPOS -
      </option>
      {optionsGrupo}
    </select>

    {/* ------------Render Clientes-------------------- */}
    
    {/*   
    <>
      <p>Clientes</p>
      <select >
        <option value="" disabled>
        - CLIENTES -
        </option>
        {optionsCliente}
      </select>
    </> */}

    {/* ------------Render Clientes---------------------- */}
  
    {/* <>
      <p>Cnpj</p>
      <select >
        <option value="" disabled>
        - CNPJ -
        </option>
        {optionsCnpj}
      </select>
    </> */}

    {/* ---------------Render Clientes-------------------- */}
  
    {/* <>
      <p>OS</p>
      <select >
        <option value="" disabled>
        - OS -
        </option>
        {optionsOS}
      </select>
    </> */}
  </>
  );//Fim do return Select
}; //Fim do GruposDropdown


//--------------------------------------------------------ProdutosSelect--------------------------------------------------------

const ProdutosSelect = () => {
  const { value: produtos } = useFetch('/api/produtos');

  const [selectedGrupo, setSelectedGrupo] = useState('');

  // console.log("produtos");
  // console.log(produtos);

  //-------------------Select/Options [[Produto]]----------------------------

  const optionsProdutos = produtos?.map(produto =>{
    return (
      <option key={produto.OS} value={produto.OS}>
        {produto.OS}
      </option>
    )
  });

  return (
    <>
      <p>OS</p>
      <select >
        <option value="" disabled>
        - os -
        </option>
        {optionsProdutos}
      </select>
    </>
  );
}; // Fim do ProdutosSelect





const Home: React.FC = () => {

  // const { value: cadastros } = useFetch('/api/cadastros');

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">FORMULÁRIO SONDA</h1>
        <p>Algum comentário</p>
        
        
        <GruposDropdown />
        
        <ProdutosSelect />
        
      </main>
    </div>
  );
};

export default Home;
