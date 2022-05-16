/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    if (start % 2 == 1) {
        start += 1;
    }

    var ans = 0;
    for (var i = start; i <= end; i += 2) {
        ans += i;
    }
    return ans;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    var ans = 0;
    while (a > 0.1) {
        a /= 2;
        ans++;
    }
    return ans;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    var i = 0;
    var ans = '';
    do {
        if ((i + 1) % 3 === 0) {
            ans += '_';
        } else {
            ans += message[i];
        }
        i++;
    } while (i < message.length);
    return ans;
}
