//  Rust 是一种 预编译静态类型(ahead-of-time compiled)语言
// 关联函数
// :: 语法表明 new 是 String 类型的一个 关联函数（associated function）。
// 关联函数是针对类型实现的，在这个例子中是 String，而不是 String 的某个特定实例。
use std::io;
use rand::Rng; // a library crate
use std::cmp::Ordering;  //Enum

fn main() {
    //  macro
    println!("welcome to ryder's guess game");
    let secret = rand::thread_rng().gen_range(1,101);
    loop {
        println!("now please input your guess number");
        let mut guess = String::new();
        // println!("secret number is {}", secret);
        // read_line 返回io::result类型,result是枚举类型，包含 Ok Err
        io::stdin().read_line(&mut guess) //& 表示这个参数是一个 引用（reference），它允许多处代码访问同一处数据，而无需在内存中多次拷贝。
            .expect("failed to read line");
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        println!("you guessed {}", guess);

        match guess.cmp(&secret) {
            Ordering::Less => println!("Too small"),
            Ordering::Greater => println!("Too big"),
            Ordering::Equal => {
                println!(" You win");
                break;
            }
        }

    }
}