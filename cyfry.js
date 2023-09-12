let btn = document.querySelector('#action').addEventListener('click', podmiana),
    ostatnia_liczba = '0';

function podmiana(){
    let liczba = document.querySelector('#liczba').value,
        p_cyfra = document.querySelectorAll('main p'),
        blok_main = document.querySelector('main'),
        string_liczba = String(liczba);

        // console.log('ost: '+ostatnia_liczba)
        // console.log('liczb z: '+string_liczba)
        // console.log('ost len: '+ostatnia_liczba.length);
        // console.log('liczb z  len: '+string_liczba.length);

        if(ostatnia_liczba.length < string_liczba.length){
            for(let i = ostatnia_liczba.length; i < string_liczba.length; i++){
                blok_main.innerHTML += '<p></p>';
            }
        }
        else if(ostatnia_liczba.length > string_liczba.length) {
            for(let i = ostatnia_liczba.length - 1; i >= string_liczba.length; i--){
                p_cyfra[i].remove();
            }
        }

        p_cyfra = document.querySelectorAll('main p');

        for(let i = 0; i < string_liczba.length; i++){
            if(string_liczba[i] != ostatnia_liczba[i]){
                p_cyfra[i].innerHTML = string_liczba[i];
            }
        }
        
        ostatnia_liczba = string_liczba;

}