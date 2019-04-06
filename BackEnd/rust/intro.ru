# Rust 是一种 预编译静态类型（ahead-of-time compiled）语言
use std::io #将io引入当前作用域 Rust 将 prelude 模块中少量的类型引入到每个程序的作用域中。

fn main() {
    # macro
    println!("welcome to ryder's guess game");
    println!("now please input your guess number");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess)
        .expect("failed to read line");
    println!("you guessed {}", guess)        
}