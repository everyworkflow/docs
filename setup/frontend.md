---
title: Frontend setup
sidebar_position: 3
---

# Frontend setup

## Project setup

```bash
git clone https://github.com/everyworkflow/frontend.git
cd frontend
yarn install
yarn dev
```

## Frontend apps

- Admin Panel
- Front Panel
- Store Panel

## Production build

```bash
yarn build
```

### Build directories

- `apps/admin-panel/build/*`
- `apps/front-panel/build/*`

### ReactJS production deployment

- Serve build dir as static files.

### NextJS production deployment

```bash
cd apps/store-panel

yarn build
yarn start
```
