test("should take old men older then 90", () => {
    const ages = [18, 20, 100, 90, 55, 23]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take couses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 150},
        {title: "JS", price: 200},
        {title: "React", price: 110},
    ]

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("React")
})

