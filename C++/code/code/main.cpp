#include<iostream>
#include <iomanip>
using namespace std;



int main()
{
/*
    int salary = 6000;
    int price = 6000;
    cout << (salary > price)  << endl;













    cout << (salary < price) << endl;
    cout << (salary == price) << endl;
    cout << (salary != price) << endl;
    cout << (salary >= price) << endl;
    cout << (salary <= price) << endl;*/


    string username = "obaida";
    string password = "123";
    string usernameinput;
    string passwordinput;
    cin >> usernameinput;
    cin >> passwordinput;

    bool usernameresult = (username == usernameinput );
    bool passwordresult = (password == passwordinput);

    cout << ( usernameresult && passwordresult) << endl ;












    bool cache = false;
    bool visa = false;

    cout << (cache || visa);




    return 0;
}
