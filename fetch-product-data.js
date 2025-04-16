// fetchProductData.js

async function fetchProductData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1) {
        reject(new Error("ID do produto inválido"));
      } else {
        resolve({ id: id, nome: "Notebook", preco: 3500 });
      }
    }, 2000);
  });
}

async function testFetchProductData() {
  try {
    const produto = await fetchProductData(101);
    console.log(produto);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }

  try {
    const produtoInvalido = await fetchProductData(-1);
    console.log(produtoInvalido);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
}

testFetchProductData();
