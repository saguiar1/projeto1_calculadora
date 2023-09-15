// Criando a classe da calculadora
class Calculator{
    constructor(){
        // Aqui é a propriedade que receberá os valores digitados
        this.displayValue = " ";
    }

    // Este método adiciona os valores à propriedade displayValue
    // Permitindo que o usuário veja os caracteres (valores) na tela --> append significa adicionar
    appendToDisplay(value){
        //displayValue vai receber e somar o valor digitado, ou seja, vai acrescentar o valor como um "texto"
        this.displayValue += value;

        //updateDisplay está dentro do método appendToDisplay para que seja exibido na tela o que foi 
        //armazenado na propriedade displayValue 
        this.updateDisplay();
    }
    
    // Esse método vai "atualizar" a tela (elemento input no HTML) que exibe os valores armazenados na propriedade displayValue
    updateDisplay(){
        //document.peguarElementoPeloId("id adicionado no input da tela no html").valor contido
        //na variável(displayValue) = vai receber o valor contido na variavel(displayValue);
        document.getElementById("displayContent").value = this.displayValue;
    }

    // Esse método limpa os valores da propriedade displayValue e chama a função updateDisplay
    clearDisplay(){
        this.displayValue = " ";    //para deixar a propriedade vazia
        this.updateDisplay();       //para atualizar a tela com um valor vazio
    }

   // O método try catch executa o cálculo da expressão matemática contida em displayValue
   // Esse método utiliza a função eval() para avaliar a expressão e, se for bem sucedida, 
   // atualiza o displayValue com o resultado e chama a função updateDisplay()

   // Se ocorrer um erro durante a avaliação, ele atualiza o displayValue com a mensagem "erro"
   // e chama a função updateDisplay()
    calculate(){
        try{
            //const result = eval(this.displayValue);

            const result = math.evaluate(this.displayValue)
            this.displayValue = result.toString();
            this.updateDisplay();
        }catch(error){
            this.displayValue = "Erro";
            this.updateDisplay();
        }
    }
}

// -- Criando o objeto ou instanciando a classe --
// Objeto chamado calc
const calc = new Calculator();