require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :title, :year, :playwright_id

  def self.all
    # pulls data as array?
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    # p data
    data.map { |datum| Play.new(datum) }
  end

  def self.find_by_title(title)
    # raise "#{self} not in database" unless @id
    play = PlayDBConnection.instance.execute(<<-SQL, title)
      SELECT
        *
      FROM
        plays
      WHERE
      title = ?
    SQL
  end

  def self.find_by_playwrite(name)
    # raise "#{self} not in database" unless @id
    play = PlayDBConnection.instance.execute(<<-SQL, name)
      SELECT
        *
      FROM
        plays
      WHERE
      playwright_id = ?
    SQL
  end

  def initialize(options)
    # options hash
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    # raises error if ID is already in DB
    # ? prevent against sql injection attacks
        # bind arguments sanatize inputs
    raise "#{self} already in database" if @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    # gets ID of last row in database
    @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    # raise error if not in DB
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id, @id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end

class Playwrights
  attr_accessor :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM playwrights")
    data.map { |datum| Play.new(datum) }
  end

  def self.find_by_name(name)
    play = PlayDBConnection.instance.execute(<<-SQL, name)
      SELECT
        *
      FROM
        playwrights
      WHERE
        name = ?
    SQL
  end

  def initialize(options)
    @id = options[:id]
    @name = options[:name]
    @birth_year = options[:birth_year]
  end

  def create
    raise '#{self} already in DB' if @id
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
      INSERT INTO
      plays( title, year, playwrite_id)
      VALUES
      (? ? ?)
    end
    SQL
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL,@name, @birth_year, @id)
      UPDATE
        plays
      SET
        name = ?, birth_year = ?
      WHERE
        id = ?
    SQL
  end

  def get_plays
    plays = PlayDBConnection.instance.execute(<<-SQL, @id)
    SELECT
      *
    FROM
      plays
    WHERE
      playwright_id = ?
    SQL
    # returns an array so must map
    plays.map { |play| Play.new(play) }
  end

end
