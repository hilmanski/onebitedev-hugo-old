---
title: "Mocking next router on Jest test"
description: "How to mock the next router on Jest test function to be able to past query when rendering a component in React or nextjs App"
date: 2022-12-28T03:27:00.000Z
topic: [testing, jest]
series: [""]
draft: false
---
How to mock the next router on Jest test function to be able to past query when rendering a component in React or nextjs App.

I got this tips from [article: how to mock next router with jest](https://dev.to/peterlidee/how-to-mock-next-router-with-jest-3p6b)

At your test file, add the following mock
```
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))
useRouter.mockReturnValue({
    query: {},
    push: () => {}
})
```

Now, everytime we render a component, we can call this useRouter function with query that we want.

For example
```
describe('see function url', () => {
    it('should return the Upload text', async () => {
        useRouter.mockReturnValue({
            query: { mode: 'rotation' },
            push: () => {}
        })

        render(<HomeView />)
        expect(screen.getByRole('title')).toHaveTextContent('Rotate')
})
```

In this example, mode is one of the query I use on my component
