//  Rust 是一种 预编译静态类型(ahead-of-time compiled)语言
// 关联函数
use std::io;
use rand::Rng;
use std::cmp::Ordering;  //Enum

fn main() {
    //  macro
    println!("welcome to ryder's guess game");
    let secret = rand::thread_rng().gen_range(1,101);
    loop {
        println!("now please input your guess number");
        let mut guess = String::new();
        // println!("secret number is {}", secret);
        io::stdin().read_line(&mut guess)
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