# Data Management Guide

## 📝 Blog Posts & Events System

The blog posts and events system has been redesigned for easy content management with automatic ID generation.

### How It Works

Both blog posts and events now use **ascending chronological order**:
- **Oldest content = ID 1**
- **Newest content = Highest ID number**
- **IDs are generated automatically** - no manual management needed!

### Adding New Content

#### 🆕 Adding a New Blog Post

1. Open `client/src/lib/data.ts`
2. Find the `blogPostsRaw` array (around line 429)
3. Add your new post **at the end** of the array:

```typescript
{
  title: "Your New Blog Post Title",
  slug: "your-new-blog-post-slug",
  excerpt: "A brief excerpt about your post...",
  content: "Full content of your blog post...",
  date: "January 26, 2025",
  imageUrl: "https://your-image-url.com/image.jpg",
  author: "RoboChargers Team",
},
// Add comment: "Add new posts here - they will automatically get the next ID number"
```

#### 📅 Adding a New Event

1. Open `client/src/lib/data.ts`
2. Find the `eventsRaw` array (around line 476)
3. Add your new event **at the end** of the array:

```typescript
{
  title: "Your Event Title",
  description: "Event description...",
  day: "26",           // Day of month
  month: "JAN",        // 3-letter month abbreviation
  year: "2025",        // Full year
  time: "9:00 AM - 5:00 PM",
  location: "Event Location",
  calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Your%20Event...",
  type: "competition", // competition, meeting, outreach, or fundraising
},
// Add comment: "Add new events here - they will automatically get the next ID number"
```

### Event Types Available
- `competition` - Robotics competitions
- `meeting` - Team meetings
- `outreach` - Community outreach events
- `fundraising` - Fundraising activities

### Benefits of This System

✅ **No manual ID management** - IDs are generated automatically
✅ **Chronological order** - Content is naturally ordered by age
✅ **Easy to add** - Just append new content to the end
✅ **No conflicts** - Never worry about duplicate IDs
✅ **Consistent** - Same system for both blog posts and events

### Where Content Appears

**Blog Posts:**
- Home page: Recent Updates section (shows latest posts)
- Blog page: Full blog listing

**Events:**
- Home page: Upcoming Events section (shows next 3 events)
- Schedule page: Full calendar and event listing with filtering

### Migration Complete

The system has been successfully migrated from manual ID management to automatic generation. All existing content IDs have been preserved and work exactly as before.