import { categoria, compra, PrismaClient, produto, usuario } from '@prisma/client'

const prisma = new PrismaClient()



export async  function createUsuario(usuario:Map<string,any>){
    await prisma.usuario.create({
        data:{
            nome:usuario.get('nome'),
            foto:usuario.get('foto'),
            login:usuario.get('login').trim().toUpperCase(),
            senha:usuario.get('senha').trim().toUpperCase()
        }
    });
} 

export let getUsuario =  async function (login:string,senha:string): Promise<usuario | null> {
    const usuario = await prisma.usuario.findFirst({
        where:{
            login:login.trim().toUpperCase(),
            senha:senha.trim().toUpperCase()
        }
    })
    return usuario;
};

export async  function createItens(itens:any){
    const createMany = await prisma.item.createMany({
        data: itens,
      })
} 


export async  function createCategoria(categoria:string,usuario:number){
    await prisma.categoria.create({
        data:{
            nome:categoria.trim().toUpperCase(),
            usuario:usuario
        }
    });
}

export let getAllCategorias =  async function (usuario:number): Promise<categoria[]> {
    const allCategories = await prisma.categoria.findMany({
        where:{
            usuario:usuario
        }
    })
    return allCategories;
};

export async  function createProduto(produto:Map<string,any>,usuario:number){
    await prisma.produto.create({
        data:{
            categoria:produto.get('categoria'),
            nome:produto.get('nome').trim().toUpperCase(),
            foto:produto.get('foto'),
            usuario:usuario
        }
    });
}

export let getAllProdutos =  async function (usuario:number): Promise<produto[]> {
    const allProdutos = await prisma.produto.findMany({
        where:{
            usuario:usuario
        },
        include:{
            categoria_categoriaToproduto:true
        }
    })
    return allProdutos;
};


export async  function createCompra(anotacao:string,usuario:number){
    await prisma.compra.create({
        data:{
            anotacao:anotacao,
            usuario:usuario
        }
    });
}

export let getAllCompras =  async function (usuario:number): Promise<compra[]> {
    const allProdutos = await prisma.compra.findMany({
        where:{
            usuario:usuario
        },
        include:{
            itens:true
        }
    })
    return allProdutos;
};

