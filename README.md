# urbanxl

# Title
Urban XL Top 10

## Project Description
Urban XL is a site that will show the top 10 hip-hop albums that were released in 2021. This will be based on the opinion of Tafari Beresford. Urban XL will also show my own personal review of each album that made it onto the list. This website will also include a list of the most anticipated upcoming hip-hop albums to be released later this year as well.

## Wireframes

The homepage wireframe will feauture all of the top tenhip-hop albums released in 2021 so far. If the album is clicked on, then it will show the album + Urban XL's review to the album which a wireframe for that will be included below.

[Link to homepage wireframe](https://imgur.com/a/y7gmZsM)

[Clicked album data wireframe](https://imgur.com/a/MDyb5vI)

The submit wireframe shows how the user post will appear. Users will have the opportunity to post their favorite hip-hop album that was released in 2021.
[Submit post wireframe](https://imgur.com/a/eoAx67f)

## Component Hierarchy

[Link to Component Hierarchy](https://imgur.com/a/1sJxm4Z)

## API and Data Sample

API: https://api.airtable.com/v0/appBlbkoSrRUxh4cI/Table%201?maxRecords=3&view=Grid%20view

This is a data sample from the records table (get request).

```
{
            "id": "recsV9b3ULpB8Jge8",
            "fields": {
                "artist": "Nicki Minaj",
                "album": "Beam Me Up Scotty",
                "releaseDate": "May 14, 2021",
                "review": "Beam Me Up Scotty originally came out in 2009, but was re-released in May 2021.",
                "imgURL": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F05%2F14%2Fnicki-minaj-2.j..."
            },
            "createdTime": "2021-07-13T13:25:57.000Z"
        },
```
This is a data sample from the reply tables (post/get request).
```
{
            "id": "recf2ocpsGjYOUke3",
            "fields": {
                "name": "Anthony",
                "reply": "You are so wrong about this. Nicki does not deserve the number one spot!! Crazy bruh."
            },
            "createdTime": "2021-07-13T20:44:59.000Z"
        }
```

### MVP/PostMVP

#### MVP

- Home page with clickable link to top 10 albums
- Clickable link to review for each album
- Album image should be rendered on the page
- CSS styling with flexbox
- Media query for desktop & mobile

#### PostMVP

- Animated background image with changing artist pictures.
- User should be able to select their favorite album from the top 10 list.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Jul 13 | Proposal Approval / Airtable Setup         | Incomplete |
| Jul 14   | Setup Index, App.js Add Data Components  | Incomplete |
| Jul 15   | MVP, CSS                                 | Incomplete |
| Jul 16   | Add Animations, continued CSS            | Incomplete |
| Jul 19   | Code Overview/Touch-Ups                  | Incomplete |
| Jul 20   | Presentation Time!                       | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |               |             |
| Airtable                  |    H     |     2hrs       |               |             |
| Navbar                    |    H     |      1hrs      |               |             |
| Homepage                  |    H     |      3hrs      |               |             |
| Album Data                |    H     |      3hrs      |               |             |
| Artist Data               |    H     |      3hrs      |               |             |
| All Data Component        |    H     |      2hrs      |               |             |
| Button Component          |    H     |      2hrs      |               |             |
| Form Component            |    H     |      2hrs      |               |             |
| Media Query               |    H     |      .5hr      |               |             |
| Form Component            |    H     |      2hrs      |               |             |
| CSS Styling               |    H     |      3hrs      |               |             |
| CSS Styling pt 2          |    H     |      3hrs      |               |             |
| Code overview             |    H     |      3hrs      |               |             |
| Total                     |    H     |         |               |             |

## SWOT Analysis

### Strengths:



### Weaknesses:



### Opportunities:



### Threats:
