var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [{
        selector: '.js-nome-completo',
        event: 'key',
        description: 'Digite seu nome completo e tecle enter',
        'keyCode' : 13
    },
    {
        selector: '.js-identidade',
        event: 'click',
        description: 'Abra a lista'
    },
    {
        selector: '.js-identidade .form-control',
        event: 'click',
        description: 'Escolha CPF na lista'
    },
    {
        selector: '#js-cpf',
        event: 'key',
        description: 'Digite seu CPF e tecle enter!',
        'keyCode' : 13
    },
    {
        selector: '.js-savebtn',
        event: 'click',
        description: 'Clique em salvar e confirme seus dados!',
    },
];



enjoyhint_instance.set(enjoyhint_script_steps);

enjoyhint_instance.run();

$("#sel1").change(function () {
    var selected_option = $('#sel1').val();

    if (selected_option === 'cpf') {
        $('#js-cpf').removeClass('hidden');
        $('#js-rg').addClass('hidden');
    }
    if (selected_option === 'rg') {
        $('#js-rg').removeClass('hidden');
        $('#js-cpf').addClass('hidden');
    }
});

function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function cpfValidation(cpf) {
    var enjoyhint_script_steps2 = [
        {
            
        },
        {
            selector: '#js-cpf',
            event: 'key',
            description: 'Insira um CPF válido!',
            'keyCode' : 13
        },
        {
            
        },
        {
            selector: '.js-savebtn',
            event: 'click',
            description: 'Clique em salvar e confirme seus dados!',
        },
    ];
    $("#helpBlock").remove();
    if (!testaCPF(cpf)) {
        $("#js-render-input").append(`<span id="helpBlock" class="help-block has-error">
            CPF Inválido!
        </span>`);

        debugger;
    
        enjoyhint_instance.set(enjoyhint_script_steps2);
        enjoyhint_instance.run();
        var enjoyhint_script_steps2 = [];
    }
    else {
        getData();
        $('#myModal').modal('show');
    }

}

function startTour() {
    var enjoyhint_instance = new EnjoyHint({});
    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
}

function getData() {
    const nome = document.getElementById('name').value;
    const documento = document.getElementById('cpf').value;

    $("#username").text(nome);
    $("#document").text(documento);
}

function speech() {
    var msg = new SpeechSynthesisUtterance('Este é um projeto desenvolvido pela FITEC. Tem como objetivo a criação de um tutorial de aplicações guiado pelo navegador do usuário. Espero que aproveite!');
    window.speechSynthesis.speak(msg);
}