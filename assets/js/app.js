

let mass = +prompt(`Масса (в кг.)`);
let height = +prompt('Рост (в метрах!)');

    let m = mass;
    let h = height;
    let index = m / (h * h);
console.log(`Индекс: ${index.toFixed(2)}`);

if (index <= 16){
    console.log(`Выраженный дефицит массы тела: ${index.toFixed(2)}`);
}

    else if (index > 16 && index <= 18.5 ){
        console.log(`Недостаточная (дефицит) масса тела: ${index.toFixed(2)}`);
    }

    else if (index > 18 && index <= 25 ){
        console.log(`Норма: ${index.toFixed(2)}`);
    }

    else if (index > 25 && index <= 30 ){
        console.log(`Избыточная масса тела (предожирение): ${index.toFixed(2)}`);
    }

    else if (index > 25 && index <= 30 ){
        console.log(`Избыточная масса тела (предожирение): ${index.toFixed(2)}`);
    }

    else if (index > 30 && index <= 35 ){
        console.log(`Ожирение 1 степени: ${index.toFixed(2)}`);
    }

    else if (index > 35 && index <= 40 ){
        console.log(`Ожирение 2 степени: ${index.toFixed(2)}`);
    }

    else if (index > 40 ){
        console.log(`Ожирение 3 степени: ${index.toFixed(2)}`);
    }








