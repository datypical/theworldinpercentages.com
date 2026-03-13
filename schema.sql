DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS sub_missions;

CREATE TABLE sub_missions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    percentage TEXT NOT NULL,
    source_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
