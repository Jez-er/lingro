# Directory for your API hooks

This folder contains functions (hooks) that perform additional actions during request processing. For example, you may use integration with tools such as TanStack Query or others to manage server state, caching, or side effects.

## Naming Convention

Each hook name should start with the name of the entity, followed by a description of the functionality performed with that entity. For example:

- `postFetch` — fetches post data
- `userCreate` — creates a user
- `commentDelete` — deletes a comment

This approach helps to structure the code and makes it more understandable for developers.
