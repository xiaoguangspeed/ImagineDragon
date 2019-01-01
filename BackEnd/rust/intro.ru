# Rust 是一种 预编译静态类型（ahead-of-time compiled）语言
use std::io

fn main() {
    # macro
    println!("welcome to ryder's guess game");
    println!("now please input your guess number");
    let mut guess = String::new();
    io::stdin.read_line(&mut guess)
        .expect("failed to read line");
    println!("you guessed {}", guess)        
}