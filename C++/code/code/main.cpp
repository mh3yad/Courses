#include<iostream>
#include<iomanip>
using namespace std;



int main()
{

    //define 2 vars long long
    long long N;
    long long M;
    //cin 2 vars
    cin >> N >> M; // 13 12
    //get last digit of first number
    int lastN =  N%10; //
    //get last digit of second number
    int lastM = M%10;
    //sum 2 last digit
    int sum = lastN + lastM;
    //cout
    cout << sum;
    return 0;
}
