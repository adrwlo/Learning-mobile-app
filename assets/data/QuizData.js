export default data = [
    {
        question: "Jaką operacje wykonasz jako pierwszą?",
        options: ["Transpozycję macierzy X",
        "Transpozycję macierzy Yt",
        "Wyznaczenie macierzy odwrotnej do macierzy X",
        "Mnożenie macierzy X i Yt"],
        correct_option: "Transpozycję macierzy X"
    },
    {
        question: "Jaką operacje wykonasz jako następną?",
        options: ["Mnożenie macierzy Yt i XT",
        "Transpozycję macierzy Yt",
        "Wyznaczenie macierzy odwrotnej do macierzy X",
        "Mnożenie macierzy XT i X"],
        correct_option: "Mnożenie macierzy XT i X"
    },
    {
        question: "Jaką operacje wykonasz jako następną?",
        options: ["Wyznaczenie macierzy odwrotnej do macierzy XT*X",
        "Mnożenie macierzy XT*X i Yt",
        "Transpozycję macierzy Yt",
        "Obliczenie wyznacznika macierzy X"],
        correct_option: "Wyznaczenie macierzy odwrotnej do macierzy XT*X"
    },
    {
        question: "Jaką operacje wykonasz jako następną?",
        options: ["Mnożenie macierzy X i Yt",
        "Mnożenie macierzy Yt przez liczbę obserwacji",
        "Mnożenie macierzy XT i Yt",
        "Obliczenie rzędu macierzy (XT*X)^-1"],
        correct_option: "Mnożenie macierzy XT i Yt"
    },
    {
        question: "Jaką operacje wykonasz jako następną?",
        options: ["Wyznaczenie macierzy odwrotnej do macierzy XT * Yt",
        "Mnożenie macierzy (XT*X)^-1 i XT",
        "Mnożenie macierzy (XT*X)^-1 i XT*Yt",
        "Obliczenie rzędu macierzy XT*Yt"],
        correct_option: "Mnożenie macierzy (XT*X)^-1 i XT*Yt"
    },
    {
        question: "Jak zinterpretujesz współczynnik a1 = 14,217?",
        options: ["Jeżeli liczba wyprodukowanych samochodów wzrośnie o 1 tys.sztuk, to zużycie energii wzrośnie o 14,217 MWh",
        "Jeżeli zużycie energii wzrośnie o 1 MWh, to liczba wyprodukowanych samochodów wzrośnie o 14,217 tys.sztuk",
        "Jeżeli w ciągu miesiąca fabryka nie wyprodukuje żadnego samochodu, to teoretyczne zużycie energii wyniesie 14,217 MWh",
        "Jeżeli miesięczne zużycie energii wzrośnie o 14,217 MWh, to liczba wyprodukowanych samochodów wzrośnie o 3,272 tys.sztuk"],
        correct_option: "Jeżeli liczba wyprodukowanych samochodów wzrośnie o 1 tys.sztuk, to zużycie energii wzrośnie o 14,217 MWh"
    },
    {
        question: "Ile zmiennych endogenicznych posiada model postaci: Yt= 14,217*X1 + 3,272 + et ?",
        options: ["4",
        "3",
        "2",
        "1"],
        correct_option: "1"
    },
    {
        question: "W jaki sposób obliczysz wariancję resztową?",
        options: ["Pomnożysz sumę kwadratów reszt przez różnicę liczby wartości i liczby parametrów",
        "Podzielisz sumę kwadratów reszt przez różnicę liczby wartości i liczby parametrów",
        "Obliczysz pierwiastek kwadratowy z średniej arytmetycznej wartości empirycznych",
        "Podzielisz sumę kwadratów reszt przez średnią arytmetyczną wartości teoretycznych"],
        correct_option: "Podzielisz sumę kwadratów reszt przez różnicę liczby wartości i liczby parametrów"
    },
    {
        question: "W jaki sposób zinterpretujesz wariancję resztową?",
        options: ["Wartości teoretyczne odchylają się od wartości empirycznych średnio o 0,807 jednostki",
        "Wartości empiryczne odchylają się od wartości teoretycznych średnio o 0,807 jednostki",
        "Nie można interpretować wariancji resztowej. Należy obliczyć odchylenie standardowe składnika resztowego",
        "80,7% modelowanego zjawiska jest wyjaśniane przez model"],
        correct_option: "Nie można interpretować wariancji resztowej. Należy obliczyć odchylenie standardowe składnika resztowego"
    },
    {
        question: "W jaki sposób obliczyć współczynnik zgodności?",
        options: ["Należy podzielić sumę kwadratów reszt przez sumę kwadratów różnic wartości empirycznych i średniej wartości empiryczych",
        "Należy obliczyć sumę kwadratów różnic wartości teoretycznych i średniej z wartości teoretycznych",
        "Należy podzielić sumę kwadratów reszt przez średnią z wartości empirycznych",
        "Należy pomnożyć sumę kwadratów reszt przez sumę kwadratów różnic wartości empirycznych i średnich wartości empirycznych"],
        correct_option: "Należy podzielić sumę kwadratów reszt przez sumę kwadratów różnic wartości empirycznych i średniej wartości empiryczych"
    },
    {
        question: "Jak zinterpretujesz wartość współczynnika zgodności równą 0,0009?",
        options: ["99,91% modelowanego zjawiska jest wyjaśniane przez model",
        "0,09% modelowanego zjawiska jest wyjaśniane przez model",
        "99,91% modelowanego zjawiska nie jest wyjaśniane przez model",
        "0,09% modelowanego zjawiska nie jest wyjaśniane przez model"],
        correct_option: "0,09% modelowanego zjawiska nie jest wyjaśniane przez model"
    },
    {
        question: "Jak obliczyć współczynnik determinacji mając juz obliczoną wartość współczynnika zgodności?",
        options: ["Należy od 1 odjąć wartość współczynnika zgodności",
        "Należy do 1 dodać wartość współczynnika zgodności",
        "Należy podzielić wartość współczynnika zgodności przez 2",
        "Nie można obliczyć wartości współczynnika determinacji mając jedynie wartość współczynnika zgodności"],
        correct_option: "Należy od 1 odjąć wartość współczynnika zgodności"
    },
    {
        question: "Jak zinterpretujesz wartość współczynnika determinacji równą 0,00091?",
        options: ["0,09% modelowanego zjawiska jest wyjaśniane prez model",
        "0,09% modelowanego zjawiska nie jest wyjaśniane przez model",
        "99,91% modelowanego zjawiska jest wyjaśniane przez model",
        "99,91% modelowanego zjawiska nie jest wyjaśniane przez model"],
        correct_option: "99,91% modelowanego zjawiska jest wyjaśniane przez model"
    },
    {
        question: "Jak obliczyć współczynnik zmienności resztowej?",
        options: ["Należy od jedności odjąć wartość współczynnika determinacji",
        "Należy od jedności odjąć średnią z wartości empirycznych",
        "Należy pomnożyć średnią z wartości empirycznych przez odchylenie standardowe reszt",
        "Należy podzielić odchylenie standardowe reszt przez średnią z wartości empirycznych"],
        correct_option: "Należy podzielić odchylenie standardowe reszt przez średnią z wartości empirycznych"
    },
    {
        question: "Jak zinterpretujesz wartość współczynnika zmienności resztowej równą 0,011?",
        options: ["Udział odchylenia standardowego reszt w przeciętnym poziomie zjawiska wynosi 98,9%",
        "Udział odchylenia standardowego reszt w przeciętnym poziomie zjawiska wynosi 1,1%",
        "1,1% modelowanego zjawiska nie jest wyjaśniane przez model",
        "98,9% modelowanego zjawiska nie jest wyjaśniane przez model"],
        correct_option: "Udział odchylenia standardowego reszt w przeciętnym poziomie zjawiska wynosi 1,1%"
    },
]