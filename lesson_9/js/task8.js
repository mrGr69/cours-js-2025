if (confirm('start')) {
    // Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
    const carNumbers = [
        "АВ1234СЕ",  
        "АХ5678А",   
        "ОР4321ТР",  
        "АХ9876КО",  
        "МН3456МН",  
        "СЕ6543ОР",  
        "ВТ1111АВ",  
        "А12345А",   
        "ТР3333МН",  
        "КЕ4444СЕ",  
        "АВ55555",   
        "СЕ6666ТР",  
        "МН77777МН", 
        "АХdd8f",   
        "А999999А"   
    ]
    const getArrNameNumber = (carNumbers) => carNumbers.filter(element => element[0]==='А')
    console.log(getArrNameNumber(carNumbers));
    
}