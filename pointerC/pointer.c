//! ====================================
//? Pointer Basics
//! ====================================

// Online C compiler to run C program online

// #include <stdio.h>
int main()
{
    int num = 10;
    int *ptr = &num;

    printf("Value of num:%d\n", num);              // Value of num:10
    printf("Address of num: %p\n", (void *)&num);  // Address of num: 0x7ffd933846c4
    printf("Value of ptr: %p\n", (void *)ptr);     // Value of ptr: 0x7ffd933846c4
    printf("Value pointed to by ptr: %d\n", *ptr); // Value pointed to by ptr: 10
    *ptr = 20;                                     // Changing the value of num through the pointer
    printf("New value of num: %d\n", num);         // New value of num: 20

    return 0;
}
// output:-
// Value of num:10
// Address of num: 0x7ffe06387544
// Value of ptr: 0x7ffe06387544
// Value pointed to by ptr: 10
// New value of num: 20

//! ====================================
//? print all elements of  Arrays using pointer
//! ====================================

// #include <stdio.h>

int main()
{

    int arr[] = {10, 20, 31, 21, 2, 1};
    int *ptr = arr;
    int size = sizeof(arr) / sizeof(arr[0]);
    printf("size of arr: %d\n", size); // 6

    printf("Array elements using pointer:\n");

    for (int i = 0; i < size; i++)
    {
        printf("%d ", *(ptr + i));
    }
    printf("\n");

    return 0;
}

// output:
// size of arr: 6
// Array elements using pointer:
// 10 20 31 21 2 1

//! ====================================
//? sort the array using pointer
//! ====================================

// #include <stdio.h>

void bubbleSort(int *arr, int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (*(arr + j) > *(arr + j + 1))
            {
                int temp = *(arr + j);
                *(arr + j) = *(arr + j + 1);
                *(arr + j + 1) = temp;
            }
        }
    }
}

void printArray(int *arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", *(arr + i));
    }
    printf("\n ");
}
int main()
{
    int arr[] = {10, 2, 3, 4, 13, 21, 3, 1, 22};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted Array is : ");
    printArray(arr, n);
    return 0;
}
// output:
// Sorted Array is : 1 2 3 3 4 10 13 21 22

//! ====================================
//? find maximum num from array
//! ====================================

// #include <stdio.h>

int maxNumFun(int *arr, int n)
{
    int maxNum = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (*(arr + i) > maxNum)
        {
            maxNum = *(arr + i);
        }
    }
    return maxNum;
}
int main()
{
    int arr[] = {10, 2, 4, 6, 2, 32, 22};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("maximum num of arr is : ");
    int maximumNum = maxNumFun(arr, n);
    printf("%d", maximumNum);
    return 0;
}
// output:
// maximum num of arr is : 32

//! ====================================
//? find the second maximum num from array
//! ====================================

// #include <stdio.h>

int maxNumFun(int *arr, int n)
{
    int maxNum = arr[0];
    int SecondmaxNum = arr[1];

    for (int i = 0; i < n; i++)
    {
        if (*(arr + i) > maxNum)
        {
            maxNum = *(arr + i);
        }
    }

    for (int j = 1; j < n; j++)
    {
        if (*(arr + j) > SecondmaxNum && *(arr + j) != maxNum)
        {
            SecondmaxNum = *(arr + j);
        }
    }
    return SecondmaxNum;
}
int main()
{
    int arr[] = {10, 2, 4, 6, 2, 32, 22};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("second maximum num of arr is : ");
    int maximumNum = maxNumFun(arr, n);
    printf("%d", maximumNum);
    return 0;
}
// output:
// second maximum num of arr is : 22

//! ===========================================================
//? create a function that increments a number using a pointer
//! ===========================================================

// #include <stdio.h>

int increment(int *num)
{
    (*num)++;
    return *num;
}

int main()
{
    int value = 5;
    printf("Value before increment: %d\n", value);

    int value2 = increment(&value);

    printf("Value after increment: %d\n", value);
    printf("Returned value: %d\n", value2);

    return 0;
}
// output :
// Value before increment: 5
// Value after increment: 6
// Returned value: 6

//! ===========================================================
//? manipulate strings using pointers
//! ===========================================================

// #include <stdio.h>

int main()
{
    char str[] = "Hello, World!";
    char *ptr = str; // Pointer to the first character of the string

    printf("String: %s\n", ptr); // Output: Hello, World!

    // Printing each character using a pointer
    while (*ptr)
    {
        printf("%c ", *ptr);
        ptr++;
    }
    printf("\n");

    return 0;
}
// output:
// String: Hello, World!
// H e l l o ,   W o r l d !

//! ===========================================================
// Pointer to Pointer
//! ===========================================================

// #include <stdio.h>

int main()
{
    int num = 30;
    int *ptr = &num;
    int **ptr2 = &ptr;

    printf("Value of num: %d\n", num);                // Output: 30
    printf("Value pointed to by ptr: %d\n", *ptr);    // Output: 30
    printf("Value pointed to by ptr2: %d\n", **ptr2); // Output: 30

    **ptr2 = 40;
    printf("Value of num: %d\n", num); // Output: 40
    return 0;
}
// output:
// Value of num: 30
// Value pointed to by ptr: 30
// Value pointed to by ptr2: 30
// Value of num: 40

//! ===========================================================
// Pointers with 2D Arrays
//! ===========================================================

// #include <stdio.h>

int main()
{
    int arr[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}};

    int(*ptr)[3] = arr; // Pointer to an array of 3 integers

    // Accessing 2D array elements using pointer
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("Element at arr[%d][%d]: %d\n", i, j, *(*(ptr + i) + j));
        }
    }

    return 0;
}

// Element at arr[0][0]: 1
// Element at arr[0][1]: 2
// Element at arr[0][2]: 3
// Element at arr[1][0]: 4
// Element at arr[1][1]: 5
// Element at arr[1][2]: 6
// Element at arr[2][0]: 7
// Element at arr[2][1]: 8
// Element at arr[2][2]: 9

//! ===========================================================
//  Count Vowels and Consonants in a String Using Pointers
//! ===========================================================

// #include <stdio.h>
// #include <ctype.h>

void countVowelsConsonants(char *str, int *vowels, int *consonants)
{
    *vowels = 0;
    *consonants = 0;
    while(*str)
    {
        if (isalpha(*str))
        {

            char lowerChar = tolower(*str);
            if (lowerChar == 'a' || lowerChar == 'e' || lowerChar == 'i' || lowerChar == 'o' || lowerChar == 'u')
            {
                (*vowels)++;
            }
            else
            {
                (*consonants)++;
            }
        }
        str++;
    }
}

int main()
{
    char str[] = "Hello World!";
    int vowels, consonants;

    countVowelsConsonants(str, &vowels, &consonants);
    printf("Vowels: %d\n", vowels);         // Output: 3
    printf("Consonants: %d\n", consonants); // Output: 7

    return 0;
}

// output:
// Vowels: 3
// Consonants: 7

//! ===========================================================
// Sum of Two Matrices Using Pointers
//! ===========================================================

// #include <stdio.h>

void addMatrices(int *mat1, int *mat2, int *result, int row, int col)
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            *(result + i * col + j) = *(mat1 + i * col + j) + *(mat2 + i * col + j);
        }
    }
}

int main()
{
    int row = 2, col = 3;
    int mat1[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int mat2[2][3] = {{7, 8, 9}, {10, 11, 12}};
    int result[2][3];

    addMatrices((int *)mat1, (int *)mat2, (int *)result, row, col);

    printf("Sum of matrices:\n");
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }

    return 0;
}
// Sum of matrices:
// 8 10 12
// 14 16 18

//! ===========================================================
// reverse the array
//! ===========================================================

// #include <stdio.h>

void reverseArray(int *arr, int size)
{
    int *start = arr;          // Pointer to the first element
    int *end = arr + size - 1; // Pointer to the last element

    while (start < end)
    {
        // Swap the elements pointed by start and end
        int temp = *start;
        *start = *end;
        *end = temp;

        // Move the pointers towards the center
        start++;
        end--;
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    reverseArray(arr, size);

    printf("Reversed array: ");

    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
// Output :
// Original array: 1 2 3 4 5 6
// Reversed array: 6 5 4 3 2 1
