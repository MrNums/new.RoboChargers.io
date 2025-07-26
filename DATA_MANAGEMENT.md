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
  imageUrl: "/images/BlogPhotos/your-image.png", // Path starts from public folder
  author: "RoboChargers Team",
  // Optional fields - only include if you have them:
  videoUrl: "https://www.youtube.com/embed/your-video-id", // Optional YouTube/Vimeo embed
  linkUrl: "https://external-website.com", // Optional external link
  linkText: "View Results", // Optional text for the link button
},
// Add comment: "Add new posts here - they will automatically get the next ID number"
```

### 🖼️ Adding Images

**Local Images (Recommended):**
1. Place your image in `client/public/images/BlogPhotos/`
2. Reference it as: `"/images/BlogPhotos/your-image.png"`
3. The path starts with `/` (from the public folder root)

**External Images:**
- Use full URLs: `"https://your-domain.com/image.jpg"`

**Example:**
- File location: `client/public/images/BlogPhotos/event-photo.jpg`
- Image URL in code: `"/images/BlogPhotos/event-photo.jpg"`

### 🎥 Adding Videos (Optional)

**YouTube Videos:**
1. Get the video ID from YouTube URL (e.g., `https://youtube.com/watch?v=ABC123` → `ABC123`)
2. Use embed format: `"https://www.youtube.com/embed/ABC123"`

**Vimeo Videos:**
1. Get video ID from Vimeo URL (e.g., `https://vimeo.com/123456` → `123456`)
2. Use embed format: `"https://player.vimeo.com/video/123456"`

### 🔗 Adding Links (Optional)

**External Links:**
- `linkUrl`: The full URL to link to
- `linkText`: The text displayed on the link button

**Example:**
```typescript
linkUrl: "https://www.firstinspires.org/robotics/frc/blog/2025-results",
linkText: "View Official Results",
```

### Optional Field Usage

**All optional fields can be omitted if not needed:**
- Don't include `videoUrl` if there's no video
- Don't include `linkUrl` and `linkText` if there's no external link
- Only add what you actually have content for

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