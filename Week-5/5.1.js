async function addition(a, b) {
    return await a + b;
}

async function multiplication(a, b) {
    return await a * b;
}

async function* generator() {
    const product = await multiplication(2, 2);
    yield await addition(20, product);
}

const g = generator();
g.next()
    .then(({ value }) => console.log('using generator:', value))
    .catch((error) => console.log(error));

//ASYNC AWAIT
const simpleAsyncAwait = async () => {
    try {
        const multiplicationVar = await multiplication(2, 2);
        const addVar = await addition(20, multiplicationVar);
        return addVar;
    } catch (ex) {
        console.error(ex);
    }
};

simpleAsyncAwait().then((value) => {
    console.log('using async await:', value);
});