const swap = (vetor, i, j) => {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
};

const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
        let a = Math.floor(Math.random() * vetor.length);
        let b = Math.floor(Math.random() * vetor.length);
        swap(vetor, a, b);
    }
};

const bubble_sort = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selection_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        swap(vetor, i, minIndex);
    }
};

const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pIndex - 1);
        quick_sort(vetor, pIndex + 1, fim);
    }
};
