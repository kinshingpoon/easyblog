---
layout: '../../layouts/MarkdownPost.astro'
title: '1071. Greatest Common Divisor of Strings'
pubDate: 2023-10-07
description: '字符串问题'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310072021594.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310072021594.png'
    alt: 'cover'
tags: ["Data Structure","LeetCode 75"]
theme: 'light'
featured: true
---
## Problem

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`.

 

**Example 1:**

Input: `str1` = "`ABCABC`", `str2` = "`ABC`"
Output: "`ABC`"

**Example 2:**

Input: str1 = "`ABABAB`", str2 = "`ABAB`"
Output: "`AB`"

**Example 3:**

Input: `str1` = "`LEET`", str2 = "`CODE`"
Output: ""
 

**Constraints:**

- ``1 <= str1.length, str2.length <= 1000``
- ``str1`` and ``str2`` consist of English uppercase letters.

## Solution
```
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        // 1. 如果满足题目要求，即str1 + str2 = (m + n)GCD = str2 + str1
        // 2. 要计算先求出他们的长度的最大公因数gcd，然后求str1或者str2的前gcd个
        if(str1 + str2 == str2 + str1){
            return str1.substr(0, gcd(str1.length(), str2.length()));
        }
        else{
            return "";
        }
    }

};
```