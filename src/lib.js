function aXDecimales (numeroInicial, numeroDecimales) {
    console.log(numeroInicial,numeroDecimales);
    const total = Math.round (numeroInicial*10**numeroDecimales)/10**numeroDecimales
    console.log(total);
    return total
}
export {aXDecimales}