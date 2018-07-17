pragma solidity ^0.4.15;
contract HelloWorld{
    address owner;
    string greeting = "Hello world";
    uint storedData;
    
    function set(uint x) public{
        storedData = x;
    }
    function get() public view returns (uint){
        return storedData;
    }
    function greet() view public returns(string){
        return greeting;
    }
}
