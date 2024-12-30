/*
 * #2
 *
 * Задача: Разработать класс Calculator с методами add и multiply, которые будут логировать вызовы этих методов с помощью декоратора LogMethodCalls.
 *
 * Цель: Создать класс, который позволяет выполнять базовые арифметические операции (сложение и умножение) и логирует детали их вызовов для дальнейшего анализа или отладки.
 *
 * Требования к реализации:
 * 1. Класс Calculator должен содержать метод add, который принимает два числа как аргументы и возвращает их сумму.
 * 2. Класс Calculator должен содержать метод multiply, который принимает два числа как аргументы и возвращает результат их умножения.
 * 3. Оба метода (add и multiply) должны быть снабжены декоратором LogMethodCalls. Этот декоратор должен логировать имя вызываемого метода и переданные ему аргументы.
 * 4. Декоратор LogMethodCalls должен быть реализован таким образом, чтобы его можно было применить к любому методу класса. При вызове метода, снабженного этим декоратором, должен выводиться лог в формате: Calling "<имя_метода>" with arguments: <аргументы_метода>.
 * 5. Все выводы логов должны осуществляться через console.log.
 */

function LogMethodCalls<T extends (...args: any[]) => any>(
  target: Object,                                
  propertyName: string,                          
  propertyDescriptor: TypedPropertyDescriptor<T> 
): TypedPropertyDescriptor<T> | void {
  const method = propertyDescriptor.value;        

  if (method) {
    propertyDescriptor.value = function (this: any, ...args: Parameters<T>): ReturnType<T> {
      console.log(`Calling "${propertyName}" with arguments: ${JSON.stringify(args)}`); 
      return method.apply(this, args);              
    } as T;
  }

  return propertyDescriptor;
}


class Calculator {

  @LogMethodCalls
  add(a: number, b: number): number {
    return a + b;                                   
  }


  @LogMethodCalls
  multiply(a: number, b: number): number {
    return a * b;                                   
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3));      
console.log(calculator.multiply(3, 4)); 


export { Calculator };


