// Alvin Bacani June 1, 2022 Fibonacci Assignment

function fibonacci(current_number, second_number){

    document.write('First 10 Fibonacci Numbers: ')

    for (let i = 1; i <= 10; i++){
        return document.write(current_number + ", ");
        new_number = current_number + second_number;
        current_number = second_number;
        second_number = new_number;
    }
}

fibonacci(0, 1);