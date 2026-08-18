-- VisaCheck Pro – MySQL schema (FastComet compatible)
-- Import once via cPanel → phpMyAdmin

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS countries (
  code CHAR(2) NOT NULL,
  name VARCHAR(120) NOT NULL,
  flag VARCHAR(16) DEFAULT NULL,
  PRIMARY KEY (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS portals (
  dest_code CHAR(2) NOT NULL,
  url VARCHAR(500) NOT NULL,
  label VARCHAR(200) DEFAULT NULL,
  updated_at DATETIME DEFAULT NULL,
  PRIMARY KEY (dest_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS visa_categories (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  dest_code CHAR(2) NOT NULL,
  visa_code VARCHAR(32) NOT NULL,
  title VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_dest_visa (dest_code, visa_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Core requirements: dest+visa apply to all origins when origin_code IS NULL
-- origin_code set = extra/override for that nationality
CREATE TABLE IF NOT EXISTS requirements (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  dest_code CHAR(2) NOT NULL,
  visa_code VARCHAR(32) NOT NULL,
  origin_code CHAR(2) DEFAULT NULL,
  section VARCHAR(120) NOT NULL,
  item_text TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  source_url VARCHAR(500) DEFAULT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  KEY idx_lookup (dest_code, visa_code, is_active),
  KEY idx_origin (origin_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS financial_rules (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  dest_code CHAR(2) NOT NULL,
  visa_code VARCHAR(32) NOT NULL,
  origin_code CHAR(2) DEFAULT NULL,
  title VARCHAR(200) NOT NULL,
  main_text TEXT NOT NULL,
  note_text TEXT,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  KEY idx_fin (dest_code, visa_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS process_steps (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  dest_code CHAR(2) NOT NULL,
  visa_code VARCHAR(32) NOT NULL,
  step_order INT NOT NULL DEFAULT 0,
  step_text TEXT NOT NULL,
  fees_text VARCHAR(500) DEFAULT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  KEY idx_proc (dest_code, visa_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS scrape_runs (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  started_at DATETIME NOT NULL,
  finished_at DATETIME DEFAULT NULL,
  success_count INT NOT NULL DEFAULT 0,
  fail_count INT NOT NULL DEFAULT 0,
  notes TEXT,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS scrape_sources (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  run_id INT UNSIGNED NOT NULL,
  source_id VARCHAR(64) NOT NULL,
  dest_code CHAR(2) DEFAULT NULL,
  url VARCHAR(500) NOT NULL,
  ok TINYINT(1) NOT NULL DEFAULT 0,
  snippet TEXT,
  error_text VARCHAR(500) DEFAULT NULL,
  fetched_at DATETIME DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_run (run_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
