/** 
 * Duty: Find close price crossover Simple Moving Average (SMA) stocks.
 * Usable: Every day of the week
 * 
 * Author: Mr. Fardin Noruzi
 * Email: norozifardin@gmail.com
 */
 
 true == function () {

    //***** Get Close Prices Function *****//
    function getPrices(index, period) {
        var prices = [];

        for (var i = index; i < period + index; i++) {
            prices[i] = [ih][i].PDrCotVal;
        }
        
        return prices;
    }

    //***** Sum Price Array Function *****//
    function sumPrices(index, period) {
        var sum = getPrices(index, period)
            .reduce(function (a, b) {
                return a + b;
            }, 0);
        return sum;
    }

    //****** Main Function ******//
    var smaPeriod = 9;
    var sma = sumPrices(0, smaPeriod) / smaPeriod;
    var smA = sumPrices(1, smaPeriod) / smaPeriod;

    //***** Check SMA Crossover Condition *****//
    if ([ih][1].PDrCotVal < smA &&
        (pl) > sma &&
        sma > smA &&
        (pcp) > 1)
        return true;
}()
