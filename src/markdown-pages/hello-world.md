---
slug: "/blog/hello-world"
date: "2021-12-15"
title: "Hello World!"
---
### My first post using markdown!
This post was rendered from `Markdown` to `html` using the [`gatsby-transformer-remark`](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) plugin for Gatsby js! This makes writing and formatting posts very painless and easy. No html or JSX required. It also uses [`gatsby-remark-katex`](https://www.gatsbyjs.com/plugins/gatsby-remark-katex/), which incorporates [KaTeX](https://github.com/KaTeX/KaTeX), "a fast, easy-to-use JavaScript library for TeX math rendering on the web". For example, here is the harmonic series in inline mode: $\sum_{n=1}^{\infty}\frac{1}{n}$, and below is Bayes theorem in an equation environment (display mode) using KaTeX: 

$$
\begin{equation}
P(A\vert B) = \frac{P(B\vert A)P(A)}{P(B)}
\end{equation}
$$