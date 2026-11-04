section .data
    name        db "obaida"
    name_len    equ $ - name

    msg1        db "my name is : "
    msg1_len    equ $ - msg1

    msg2        db "my age is : "
    msg2_len    equ $ - msg2

    age         dd 15               ; int age = 15;
    newline     db 10               ; endl

section .bss
    buffer      resb 12             ; space for the age as text

section .text
    global _start

_start:
    ; cout << "my name is : "
    mov     rax, 1                  ; syscall: write
    mov     rdi, 1                  ; fd 1 = stdout
    mov     rsi, msg1
    mov     rdx, msg1_len
    syscall

    ; cout << name
    mov     rax, 1
    mov     rdi, 1
    mov     rsi, name
    mov     rdx, name_len
    syscall

    ; cout << endl
    mov     rax, 1
    mov     rdi, 1
    mov     rsi, newline
    mov     rdx, 1
    syscall

    ; cout << "my age is : "
    mov     rax, 1
    mov     rdi, 1
    mov     rsi, msg2
    mov     rdx, msg2_len
    syscall

    ; convert age (integer) to ASCII text
    mov     eax, [age]
    lea     rdi, [buffer + 12]      ; start at the end of the buffer
    mov     ecx, 10
    xor     r8d, r8d                ; digit counter
.convert:
    xor     edx, edx
    div     ecx                     ; eax = eax / 10, edx = remainder
    add     dl, '0'                 ; digit -> character
    dec     rdi
    mov     [rdi], dl
    inc     r8
    test    eax, eax
    jnz     .convert

    ; cout << age
    mov     rsi, rdi                ; pointer to first digit
    mov     rdx, r8                 ; number of digits
    mov     edi, 1
    mov     eax, 1
    syscall

    ; cout << endl
    mov     rax, 1
    mov     rdi, 1
    mov     rsi, newline
    mov     rdx, 1
    syscall

    ; return 0;
    mov     eax, 60                 ; syscall: exit
    xor     edi, edi                ; status 0
    syscall