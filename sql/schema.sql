DROP SCHEMA public CASCADE;
CREATE SCHEMA public;


CREATE TABLE groups (
    id SERIAL,
    name varchar(50) NOT NULL,
    description varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE events (
    id SERIAL,
    group_id INT,
    title VARCHAR(50) NOT NULL,
    datetime timestamptz NOT NULL,
    location VARCHAR(50) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    online_event BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (group_id) REFERENCES groups (id)
);
