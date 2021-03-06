# Cubitts Recreation Site
By Devon Partridge-Officer

## About
This project aims to replicate the function and look of the website Cubitts.com

![image](https://pbs.twimg.com/media/FHyIxdlWQAQONkT.jpg)


## Viewing locally using Node.js

Using node.js at a prompt

```bash
npm start
```
Then click [here](http://localhost:3000/) to view the page


## Viewing Deployed site on Heroku

[Click here](https://cubitts-site-devon.herokuapp.com/) to view the deployed site


## Known Bugs and Issues
- Image zoom on hover changes the size of the image
- Elements using CSS class "shrink" disappear with responsiveness
- Responsiveness not finished (issues with font size and image sizing)
- Footer Design not finished
- Images in 2x2 grid do not change with hover
- Bottom border on header is too wide
- No dropmenu for currency in footer
- Tips at top of page not updating correctly with JavaScript


## Issues Resolved

Due to my filestructure in this repo I had a large amount of trouble getting the site deployed to Heroku when following the inclass instructions. This was solved by returning to the root folder of the repo and using the following code:

```bash
git subtree push --prefix "Assessment Site" heroku main
```
