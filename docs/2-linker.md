# Linker

Linker is a program that takes one or more object (`.obj`) files generated by a compiler and combines them into a single executable program. 


:::warning
Compiler errors start with `C` and linker errors start with `LNK`.
:::

:::info
As long as the function is not used. Linker will not include it in the final executable.
:::

## Entry Point
Entry point is the first function that is executed when the program starts. In C++ it is `main` function by default. 


## Linking errors

### Undefined reference
When the linker can't find the definition of a function or a variable that is used in the program, it will throw an error. 

```cpp

void undefinedFunction();

void function(){
    // This function is not defined anywhere. 
    // LNK2019: unresolved external symbol
    undefinedFunction(); // if it would be commented. Code would compile.
}

```

### Static keyword
If keyword `static` is used in a function declaration, it will mean that this code is only visible in the file where it is defined. 
It will be just internal. 
so:
```cpp


void someFunction(){
    Log("Hello");// This function is not defined anywhere.
};

int main(){
}
```
Will throw an error. Even that someFUnction is not used. It may be used in another file. 

```cpp
static void someFunction(){
    Log("Hello");// This function is not defined anywhere.
};

int main(){
}
```
won't throw an error.


### inline keyword
If the function is defined as inline, it will be included in the final executable. 

```cpp
inline void someFunction(){
    cout << "Hello";
};
```
when included only body of the function will be included (`cout << "Hello";`).