## Photo Renamer: Add Date Prefix

You're a photographer organizing photos by adding dates to filenames.

### Task

Write `renamePhotos(photos)` that renames photos to format:
`YYYY-MM-DD_photo_XXX.ext`

Input:

```
[
  { name: 'IMG_1234.jpg', date: '2024-01-15' },
  { name: 'IMG_5678.jpg', date: '2024-01-15' },
  { name: 'DSC_0001.png', date: '2024-02-20' }
]
```

Output:

```
[
  '2024-01-15_photo_001.jpg',
  '2024-01-15_photo_002.jpg',
  '2024-02-20_photo_001.png'
]
```

Rules

1. Photos with the same date → sequential numbering (001, 002, 003...)
2. Photos with different dates → reset to 001
3. Keep input order (don't sort by date!)
4. If same date appears again later → continue its counter

Examples

Tricky case (same date appears twice):

```
renamePhotos([
  { name: 'A.jpg', date: '2024-01-15' },
  { name: 'B.jpg', date: '2024-02-20' },
  { name: 'C.jpg', date: '2024-01-15' }  // Same date!
])

// Returns:
[
  '2024-01-15_photo_001.jpg',
  '2024-02-20_photo_001.jpg',
  '2024-01-15_photo_002.jpg'  // Counter continues!
]
```

Different extensions:

```
renamePhotos([
  { name: 'vacation.jpg', date: '2024-01-15' },
  { name: 'beach.png', date: '2024-01-15' }
])
// Returns:
[
  '2024-01-15_photo_001.jpg',
  '2024-01-15_photo_002.png'
]
```

Notes

- Extensions: .jpg, .jpeg, .png, .gif, .bmp
- Always 3 digits: 001, 012, 123
- Dates are valid YYYY-MM-DD format
