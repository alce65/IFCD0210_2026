SELECT * 
FROM Album al
JOIN Artist ar
ON al.ArtistId = ar.ArtistId
WHERE ar.Name like '%Black%';


SELECT tr.Name, ar.Name artist, al.Title  as album, ge.name genre
FROM Album al
JOIN Artist ar
ON al.ArtistId = ar.ArtistId
JOIN Track tr
ON al.AlbumId = tr.AlbumId
JOIN Genre ge
ON tr.GenreId = ge.GenreId
WHERE ar.Name like '%Alice%';
LIMIT 20;

-- Album, Artista, Genero

SELECT ar.Name artist, al.Title  as album, ge.name genre
FROM Album al
JOIN Artist ar
ON al.ArtistId = ar.ArtistId
JOIN Track tr
ON al.AlbumId = tr.AlbumId
JOIN Genre ge
ON tr.GenreId = ge.GenreId
GROUP BY al.Title
LIMIT 20;

SELECT iv.CustomerId, cu.FirstName, cu.LastName, iv.InvoiceDate 
FROM Invoice iv
JOIN Customer cu
ON iv.CustomerId = cu.CustomerId
WHERE iv.CustomerId = 1;
